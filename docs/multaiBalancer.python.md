# `spotinst_multai_balancer`

Refer to the Terraform Registory for docs: [`spotinst_multai_balancer`](https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer).

# `multaiBalancer` Submodule <a name="`multaiBalancer` Submodule" id="@cdktf/provider-spotinst.multaiBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MultaiBalancer <a name="MultaiBalancer" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer spotinst_multai_balancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_balancer

multaiBalancer.MultaiBalancer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  connection_timeouts: MultaiBalancerConnectionTimeouts = None,
  dns_cname_aliases: typing.List[str] = None,
  id: str = None,
  scheme: str = None,
  tags: typing.Union[IResolvable, typing.List[MultaiBalancerTags]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#name MultaiBalancer#name}. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.connectionTimeouts">connection_timeouts</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeouts">MultaiBalancerConnectionTimeouts</a></code> | connection_timeouts block. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.dnsCnameAliases">dns_cname_aliases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#dns_cname_aliases MultaiBalancer#dns_cname_aliases}. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#id MultaiBalancer#id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.scheme">scheme</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#scheme MultaiBalancer#scheme}. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTags">MultaiBalancerTags</a>]]</code> | tags block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#name MultaiBalancer#name}.

---

##### `connection_timeouts`<sup>Optional</sup> <a name="connection_timeouts" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.connectionTimeouts"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeouts">MultaiBalancerConnectionTimeouts</a>

connection_timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#connection_timeouts MultaiBalancer#connection_timeouts}

---

##### `dns_cname_aliases`<sup>Optional</sup> <a name="dns_cname_aliases" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.dnsCnameAliases"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#dns_cname_aliases MultaiBalancer#dns_cname_aliases}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#id MultaiBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.scheme"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#scheme MultaiBalancer#scheme}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTags">MultaiBalancerTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#tags MultaiBalancer#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.putConnectionTimeouts">put_connection_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.resetConnectionTimeouts">reset_connection_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.resetDnsCnameAliases">reset_dns_cname_aliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.resetScheme">reset_scheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_connection_timeouts` <a name="put_connection_timeouts" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.putConnectionTimeouts"></a>

```python
def put_connection_timeouts(
  draining: typing.Union[int, float] = None,
  idle: typing.Union[int, float] = None
) -> None
```

###### `draining`<sup>Optional</sup> <a name="draining" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.putConnectionTimeouts.parameter.draining"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#draining MultaiBalancer#draining}.

---

###### `idle`<sup>Optional</sup> <a name="idle" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.putConnectionTimeouts.parameter.idle"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#idle MultaiBalancer#idle}.

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[MultaiBalancerTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTags">MultaiBalancerTags</a>]]

---

##### `reset_connection_timeouts` <a name="reset_connection_timeouts" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.resetConnectionTimeouts"></a>

```python
def reset_connection_timeouts() -> None
```

##### `reset_dns_cname_aliases` <a name="reset_dns_cname_aliases" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.resetDnsCnameAliases"></a>

```python
def reset_dns_cname_aliases() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_scheme` <a name="reset_scheme" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.resetScheme"></a>

```python
def reset_scheme() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_balancer

multaiBalancer.MultaiBalancer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_balancer

multaiBalancer.MultaiBalancer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_balancer

multaiBalancer.MultaiBalancer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.connectionTimeouts">connection_timeouts</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference">MultaiBalancerConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList">MultaiBalancerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.connectionTimeoutsInput">connection_timeouts_input</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeouts">MultaiBalancerConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.dnsCnameAliasesInput">dns_cname_aliases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTags">MultaiBalancerTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.dnsCnameAliases">dns_cname_aliases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_timeouts`<sup>Required</sup> <a name="connection_timeouts" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.connectionTimeouts"></a>

```python
connection_timeouts: MultaiBalancerConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference">MultaiBalancerConnectionTimeoutsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.tags"></a>

```python
tags: MultaiBalancerTagsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList">MultaiBalancerTagsList</a>

---

##### `connection_timeouts_input`<sup>Optional</sup> <a name="connection_timeouts_input" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.connectionTimeoutsInput"></a>

```python
connection_timeouts_input: MultaiBalancerConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeouts">MultaiBalancerConnectionTimeouts</a>

---

##### `dns_cname_aliases_input`<sup>Optional</sup> <a name="dns_cname_aliases_input" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.dnsCnameAliasesInput"></a>

```python
dns_cname_aliases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[MultaiBalancerTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTags">MultaiBalancerTags</a>]]

---

##### `dns_cname_aliases`<sup>Required</sup> <a name="dns_cname_aliases" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.dnsCnameAliases"></a>

```python
dns_cname_aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MultaiBalancerConfig <a name="MultaiBalancerConfig" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_balancer

multaiBalancer.MultaiBalancerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  connection_timeouts: MultaiBalancerConnectionTimeouts = None,
  dns_cname_aliases: typing.List[str] = None,
  id: str = None,
  scheme: str = None,
  tags: typing.Union[IResolvable, typing.List[MultaiBalancerTags]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#name MultaiBalancer#name}. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.connectionTimeouts">connection_timeouts</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeouts">MultaiBalancerConnectionTimeouts</a></code> | connection_timeouts block. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.dnsCnameAliases">dns_cname_aliases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#dns_cname_aliases MultaiBalancer#dns_cname_aliases}. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#id MultaiBalancer#id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.scheme">scheme</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#scheme MultaiBalancer#scheme}. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTags">MultaiBalancerTags</a>]]</code> | tags block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#name MultaiBalancer#name}.

---

##### `connection_timeouts`<sup>Optional</sup> <a name="connection_timeouts" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.connectionTimeouts"></a>

```python
connection_timeouts: MultaiBalancerConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeouts">MultaiBalancerConnectionTimeouts</a>

connection_timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#connection_timeouts MultaiBalancer#connection_timeouts}

---

##### `dns_cname_aliases`<sup>Optional</sup> <a name="dns_cname_aliases" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.dnsCnameAliases"></a>

```python
dns_cname_aliases: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#dns_cname_aliases MultaiBalancer#dns_cname_aliases}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#id MultaiBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#scheme MultaiBalancer#scheme}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[MultaiBalancerTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTags">MultaiBalancerTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#tags MultaiBalancer#tags}

---

### MultaiBalancerConnectionTimeouts <a name="MultaiBalancerConnectionTimeouts" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_balancer

multaiBalancer.MultaiBalancerConnectionTimeouts(
  draining: typing.Union[int, float] = None,
  idle: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeouts.property.draining">draining</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#draining MultaiBalancer#draining}. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeouts.property.idle">idle</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#idle MultaiBalancer#idle}. |

---

##### `draining`<sup>Optional</sup> <a name="draining" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeouts.property.draining"></a>

```python
draining: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#draining MultaiBalancer#draining}.

---

##### `idle`<sup>Optional</sup> <a name="idle" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeouts.property.idle"></a>

```python
idle: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#idle MultaiBalancer#idle}.

---

### MultaiBalancerTags <a name="MultaiBalancerTags" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTags.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_balancer

multaiBalancer.MultaiBalancerTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#key MultaiBalancer#key}. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#value MultaiBalancer#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#key MultaiBalancer#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/multai_balancer#value MultaiBalancer#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MultaiBalancerConnectionTimeoutsOutputReference <a name="MultaiBalancerConnectionTimeoutsOutputReference" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_balancer

multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.resetDraining">reset_draining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.resetIdle">reset_idle</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_draining` <a name="reset_draining" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.resetDraining"></a>

```python
def reset_draining() -> None
```

##### `reset_idle` <a name="reset_idle" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.resetIdle"></a>

```python
def reset_idle() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.property.drainingInput">draining_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.property.idleInput">idle_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.property.draining">draining</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.property.idle">idle</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeouts">MultaiBalancerConnectionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `draining_input`<sup>Optional</sup> <a name="draining_input" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.property.drainingInput"></a>

```python
draining_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idle_input`<sup>Optional</sup> <a name="idle_input" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.property.idleInput"></a>

```python
idle_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `draining`<sup>Required</sup> <a name="draining" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.property.draining"></a>

```python
draining: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idle`<sup>Required</sup> <a name="idle" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.property.idle"></a>

```python
idle: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: MultaiBalancerConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerConnectionTimeouts">MultaiBalancerConnectionTimeouts</a>

---


### MultaiBalancerTagsList <a name="MultaiBalancerTagsList" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_balancer

multaiBalancer.MultaiBalancerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MultaiBalancerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTags">MultaiBalancerTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MultaiBalancerTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTags">MultaiBalancerTags</a>]]

---


### MultaiBalancerTagsOutputReference <a name="MultaiBalancerTagsOutputReference" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_balancer

multaiBalancer.MultaiBalancerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTags">MultaiBalancerTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MultaiBalancerTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.multaiBalancer.MultaiBalancerTags">MultaiBalancerTags</a>]

---



