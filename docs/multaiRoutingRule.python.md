# `spotinst_multai_routing_rule`

Refer to the Terraform Registory for docs: [`spotinst_multai_routing_rule`](https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule).

# `multaiRoutingRule` Submodule <a name="`multaiRoutingRule` Submodule" id="@cdktf/provider-spotinst.multaiRoutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MultaiRoutingRule <a name="MultaiRoutingRule" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule spotinst_multai_routing_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_routing_rule

multaiRoutingRule.MultaiRoutingRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  balancer_id: str,
  listener_id: str,
  route: str,
  target_set_ids: typing.List[str],
  id: str = None,
  middleware_ids: typing.List[str] = None,
  priority: typing.Union[int, float] = None,
  strategy: str = None,
  tags: typing.Union[IResolvable, typing.List[MultaiRoutingRuleTags]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.balancerId">balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#balancer_id MultaiRoutingRule#balancer_id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.listenerId">listener_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#listener_id MultaiRoutingRule#listener_id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.route">route</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#route MultaiRoutingRule#route}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.targetSetIds">target_set_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#target_set_ids MultaiRoutingRule#target_set_ids}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#id MultaiRoutingRule#id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.middlewareIds">middleware_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#middleware_ids MultaiRoutingRule#middleware_ids}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#priority MultaiRoutingRule#priority}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.strategy">strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#strategy MultaiRoutingRule#strategy}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags">MultaiRoutingRuleTags</a>]]</code> | tags block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `balancer_id`<sup>Required</sup> <a name="balancer_id" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.balancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#balancer_id MultaiRoutingRule#balancer_id}.

---

##### `listener_id`<sup>Required</sup> <a name="listener_id" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.listenerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#listener_id MultaiRoutingRule#listener_id}.

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.route"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#route MultaiRoutingRule#route}.

---

##### `target_set_ids`<sup>Required</sup> <a name="target_set_ids" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.targetSetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#target_set_ids MultaiRoutingRule#target_set_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#id MultaiRoutingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `middleware_ids`<sup>Optional</sup> <a name="middleware_ids" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.middlewareIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#middleware_ids MultaiRoutingRule#middleware_ids}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#priority MultaiRoutingRule#priority}.

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.strategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#strategy MultaiRoutingRule#strategy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags">MultaiRoutingRuleTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#tags MultaiRoutingRule#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetMiddlewareIds">reset_middleware_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetStrategy">reset_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[MultaiRoutingRuleTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags">MultaiRoutingRuleTags</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_middleware_ids` <a name="reset_middleware_ids" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetMiddlewareIds"></a>

```python
def reset_middleware_ids() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_strategy` <a name="reset_strategy" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetStrategy"></a>

```python
def reset_strategy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_routing_rule

multaiRoutingRule.MultaiRoutingRule.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_routing_rule

multaiRoutingRule.MultaiRoutingRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_routing_rule

multaiRoutingRule.MultaiRoutingRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList">MultaiRoutingRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.balancerIdInput">balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.listenerIdInput">listener_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.middlewareIdsInput">middleware_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.routeInput">route_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.strategyInput">strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags">MultaiRoutingRuleTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.targetSetIdsInput">target_set_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.balancerId">balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.listenerId">listener_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.middlewareIds">middleware_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.route">route</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.strategy">strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.targetSetIds">target_set_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.tags"></a>

```python
tags: MultaiRoutingRuleTagsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList">MultaiRoutingRuleTagsList</a>

---

##### `balancer_id_input`<sup>Optional</sup> <a name="balancer_id_input" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.balancerIdInput"></a>

```python
balancer_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listener_id_input`<sup>Optional</sup> <a name="listener_id_input" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.listenerIdInput"></a>

```python
listener_id_input: str
```

- *Type:* str

---

##### `middleware_ids_input`<sup>Optional</sup> <a name="middleware_ids_input" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.middlewareIdsInput"></a>

```python
middleware_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `route_input`<sup>Optional</sup> <a name="route_input" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.routeInput"></a>

```python
route_input: str
```

- *Type:* str

---

##### `strategy_input`<sup>Optional</sup> <a name="strategy_input" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.strategyInput"></a>

```python
strategy_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[MultaiRoutingRuleTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags">MultaiRoutingRuleTags</a>]]

---

##### `target_set_ids_input`<sup>Optional</sup> <a name="target_set_ids_input" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.targetSetIdsInput"></a>

```python
target_set_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `balancer_id`<sup>Required</sup> <a name="balancer_id" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.balancerId"></a>

```python
balancer_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listener_id`<sup>Required</sup> <a name="listener_id" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.listenerId"></a>

```python
listener_id: str
```

- *Type:* str

---

##### `middleware_ids`<sup>Required</sup> <a name="middleware_ids" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.middlewareIds"></a>

```python
middleware_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.route"></a>

```python
route: str
```

- *Type:* str

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

---

##### `target_set_ids`<sup>Required</sup> <a name="target_set_ids" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.targetSetIds"></a>

```python
target_set_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MultaiRoutingRuleConfig <a name="MultaiRoutingRuleConfig" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_routing_rule

multaiRoutingRule.MultaiRoutingRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  balancer_id: str,
  listener_id: str,
  route: str,
  target_set_ids: typing.List[str],
  id: str = None,
  middleware_ids: typing.List[str] = None,
  priority: typing.Union[int, float] = None,
  strategy: str = None,
  tags: typing.Union[IResolvable, typing.List[MultaiRoutingRuleTags]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.balancerId">balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#balancer_id MultaiRoutingRule#balancer_id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.listenerId">listener_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#listener_id MultaiRoutingRule#listener_id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.route">route</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#route MultaiRoutingRule#route}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.targetSetIds">target_set_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#target_set_ids MultaiRoutingRule#target_set_ids}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#id MultaiRoutingRule#id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.middlewareIds">middleware_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#middleware_ids MultaiRoutingRule#middleware_ids}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#priority MultaiRoutingRule#priority}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.strategy">strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#strategy MultaiRoutingRule#strategy}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags">MultaiRoutingRuleTags</a>]]</code> | tags block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `balancer_id`<sup>Required</sup> <a name="balancer_id" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.balancerId"></a>

```python
balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#balancer_id MultaiRoutingRule#balancer_id}.

---

##### `listener_id`<sup>Required</sup> <a name="listener_id" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.listenerId"></a>

```python
listener_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#listener_id MultaiRoutingRule#listener_id}.

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.route"></a>

```python
route: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#route MultaiRoutingRule#route}.

---

##### `target_set_ids`<sup>Required</sup> <a name="target_set_ids" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.targetSetIds"></a>

```python
target_set_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#target_set_ids MultaiRoutingRule#target_set_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#id MultaiRoutingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `middleware_ids`<sup>Optional</sup> <a name="middleware_ids" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.middlewareIds"></a>

```python
middleware_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#middleware_ids MultaiRoutingRule#middleware_ids}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#priority MultaiRoutingRule#priority}.

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#strategy MultaiRoutingRule#strategy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[MultaiRoutingRuleTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags">MultaiRoutingRuleTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#tags MultaiRoutingRule#tags}

---

### MultaiRoutingRuleTags <a name="MultaiRoutingRuleTags" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_routing_rule

multaiRoutingRule.MultaiRoutingRuleTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#key MultaiRoutingRule#key}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#value MultaiRoutingRule#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#key MultaiRoutingRule#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.121.0/docs/resources/multai_routing_rule#value MultaiRoutingRule#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MultaiRoutingRuleTagsList <a name="MultaiRoutingRuleTagsList" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_routing_rule

multaiRoutingRule.MultaiRoutingRuleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MultaiRoutingRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags">MultaiRoutingRuleTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MultaiRoutingRuleTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags">MultaiRoutingRuleTags</a>]]

---


### MultaiRoutingRuleTagsOutputReference <a name="MultaiRoutingRuleTagsOutputReference" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_routing_rule

multaiRoutingRule.MultaiRoutingRuleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags">MultaiRoutingRuleTags</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[MultaiRoutingRuleTags, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags">MultaiRoutingRuleTags</a>, cdktf.IResolvable]

---



