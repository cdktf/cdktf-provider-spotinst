# `spotinst_multai_target_set`

Refer to the Terraform Registory for docs: [`spotinst_multai_target_set`](https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set).

# `multaiTargetSet` Submodule <a name="`multaiTargetSet` Submodule" id="@cdktf/provider-spotinst.multaiTargetSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MultaiTargetSet <a name="MultaiTargetSet" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set spotinst_multai_target_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_target_set

multaiTargetSet.MultaiTargetSet(
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
  deployment_id: str,
  health_check: MultaiTargetSetHealthCheck,
  protocol: str,
  weight: typing.Union[int, float],
  id: str = None,
  name: str = None,
  port: typing.Union[int, float] = None,
  tags: typing.Union[IResolvable, typing.List[MultaiTargetSetTags]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.balancerId">balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#balancer_id MultaiTargetSet#balancer_id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.deploymentId">deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#deployment_id MultaiTargetSet#deployment_id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck">MultaiTargetSetHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#protocol MultaiTargetSet#protocol}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#weight MultaiTargetSet#weight}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#id MultaiTargetSet#id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#name MultaiTargetSet#name}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#port MultaiTargetSet#port}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTags">MultaiTargetSetTags</a>]]</code> | tags block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `balancer_id`<sup>Required</sup> <a name="balancer_id" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.balancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#balancer_id MultaiTargetSet#balancer_id}.

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.deploymentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#deployment_id MultaiTargetSet#deployment_id}.

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.healthCheck"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck">MultaiTargetSetHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#health_check MultaiTargetSet#health_check}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#protocol MultaiTargetSet#protocol}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.weight"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#weight MultaiTargetSet#weight}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#id MultaiTargetSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#name MultaiTargetSet#name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#port MultaiTargetSet#port}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTags">MultaiTargetSetTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#tags MultaiTargetSet#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.putHealthCheck">put_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_health_check` <a name="put_health_check" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.putHealthCheck"></a>

```python
def put_health_check(
  healthy_threshold: typing.Union[int, float],
  interval: typing.Union[int, float],
  path: str,
  protocol: str,
  timeout: typing.Union[int, float],
  unhealthy_threshold: typing.Union[int, float],
  port: typing.Union[int, float] = None
) -> None
```

###### `healthy_threshold`<sup>Required</sup> <a name="healthy_threshold" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.putHealthCheck.parameter.healthyThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#healthy_threshold MultaiTargetSet#healthy_threshold}.

---

###### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.putHealthCheck.parameter.interval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#interval MultaiTargetSet#interval}.

---

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.putHealthCheck.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#path MultaiTargetSet#path}.

---

###### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.putHealthCheck.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#protocol MultaiTargetSet#protocol}.

---

###### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.putHealthCheck.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#timeout MultaiTargetSet#timeout}.

---

###### `unhealthy_threshold`<sup>Required</sup> <a name="unhealthy_threshold" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.putHealthCheck.parameter.unhealthyThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#unhealthy_threshold MultaiTargetSet#unhealthy_threshold}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.putHealthCheck.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#port MultaiTargetSet#port}.

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[MultaiTargetSetTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTags">MultaiTargetSetTags</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_target_set

multaiTargetSet.MultaiTargetSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_target_set

multaiTargetSet.MultaiTargetSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_target_set

multaiTargetSet.MultaiTargetSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference">MultaiTargetSetHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList">MultaiTargetSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.balancerIdInput">balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.deploymentIdInput">deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.healthCheckInput">health_check_input</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck">MultaiTargetSetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTags">MultaiTargetSetTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.balancerId">balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.healthCheck"></a>

```python
health_check: MultaiTargetSetHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference">MultaiTargetSetHealthCheckOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.tags"></a>

```python
tags: MultaiTargetSetTagsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList">MultaiTargetSetTagsList</a>

---

##### `balancer_id_input`<sup>Optional</sup> <a name="balancer_id_input" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.balancerIdInput"></a>

```python
balancer_id_input: str
```

- *Type:* str

---

##### `deployment_id_input`<sup>Optional</sup> <a name="deployment_id_input" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.deploymentIdInput"></a>

```python
deployment_id_input: str
```

- *Type:* str

---

##### `health_check_input`<sup>Optional</sup> <a name="health_check_input" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.healthCheckInput"></a>

```python
health_check_input: MultaiTargetSetHealthCheck
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck">MultaiTargetSetHealthCheck</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[MultaiTargetSetTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTags">MultaiTargetSetTags</a>]]

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `balancer_id`<sup>Required</sup> <a name="balancer_id" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.balancerId"></a>

```python
balancer_id: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MultaiTargetSetConfig <a name="MultaiTargetSetConfig" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_target_set

multaiTargetSet.MultaiTargetSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  balancer_id: str,
  deployment_id: str,
  health_check: MultaiTargetSetHealthCheck,
  protocol: str,
  weight: typing.Union[int, float],
  id: str = None,
  name: str = None,
  port: typing.Union[int, float] = None,
  tags: typing.Union[IResolvable, typing.List[MultaiTargetSetTags]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.balancerId">balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#balancer_id MultaiTargetSet#balancer_id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.deploymentId">deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#deployment_id MultaiTargetSet#deployment_id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck">MultaiTargetSetHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#protocol MultaiTargetSet#protocol}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#weight MultaiTargetSet#weight}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#id MultaiTargetSet#id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#name MultaiTargetSet#name}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#port MultaiTargetSet#port}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTags">MultaiTargetSetTags</a>]]</code> | tags block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `balancer_id`<sup>Required</sup> <a name="balancer_id" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.balancerId"></a>

```python
balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#balancer_id MultaiTargetSet#balancer_id}.

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#deployment_id MultaiTargetSet#deployment_id}.

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.healthCheck"></a>

```python
health_check: MultaiTargetSetHealthCheck
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck">MultaiTargetSetHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#health_check MultaiTargetSet#health_check}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#protocol MultaiTargetSet#protocol}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#weight MultaiTargetSet#weight}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#id MultaiTargetSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#name MultaiTargetSet#name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#port MultaiTargetSet#port}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[MultaiTargetSetTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTags">MultaiTargetSetTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#tags MultaiTargetSet#tags}

---

### MultaiTargetSetHealthCheck <a name="MultaiTargetSetHealthCheck" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_target_set

multaiTargetSet.MultaiTargetSetHealthCheck(
  healthy_threshold: typing.Union[int, float],
  interval: typing.Union[int, float],
  path: str,
  protocol: str,
  timeout: typing.Union[int, float],
  unhealthy_threshold: typing.Union[int, float],
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck.property.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#healthy_threshold MultaiTargetSet#healthy_threshold}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#interval MultaiTargetSet#interval}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#path MultaiTargetSet#path}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#protocol MultaiTargetSet#protocol}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#timeout MultaiTargetSet#timeout}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#unhealthy_threshold MultaiTargetSet#unhealthy_threshold}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#port MultaiTargetSet#port}. |

---

##### `healthy_threshold`<sup>Required</sup> <a name="healthy_threshold" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck.property.healthyThreshold"></a>

```python
healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#healthy_threshold MultaiTargetSet#healthy_threshold}.

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#interval MultaiTargetSet#interval}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#path MultaiTargetSet#path}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#protocol MultaiTargetSet#protocol}.

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#timeout MultaiTargetSet#timeout}.

---

##### `unhealthy_threshold`<sup>Required</sup> <a name="unhealthy_threshold" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#unhealthy_threshold MultaiTargetSet#unhealthy_threshold}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#port MultaiTargetSet#port}.

---

### MultaiTargetSetTags <a name="MultaiTargetSetTags" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTags.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_target_set

multaiTargetSet.MultaiTargetSetTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#key MultaiTargetSet#key}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#value MultaiTargetSet#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#key MultaiTargetSet#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target_set#value MultaiTargetSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MultaiTargetSetHealthCheckOutputReference <a name="MultaiTargetSetHealthCheckOutputReference" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_target_set

multaiTargetSet.MultaiTargetSetHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.healthyThresholdInput">healthy_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.unhealthyThresholdInput">unhealthy_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck">MultaiTargetSetHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `healthy_threshold_input`<sup>Optional</sup> <a name="healthy_threshold_input" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.healthyThresholdInput"></a>

```python
healthy_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unhealthy_threshold_input`<sup>Optional</sup> <a name="unhealthy_threshold_input" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.unhealthyThresholdInput"></a>

```python
unhealthy_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `healthy_threshold`<sup>Required</sup> <a name="healthy_threshold" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.healthyThreshold"></a>

```python
healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unhealthy_threshold`<sup>Required</sup> <a name="unhealthy_threshold" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: MultaiTargetSetHealthCheck
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetHealthCheck">MultaiTargetSetHealthCheck</a>

---


### MultaiTargetSetTagsList <a name="MultaiTargetSetTagsList" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_target_set

multaiTargetSet.MultaiTargetSetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MultaiTargetSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTags">MultaiTargetSetTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MultaiTargetSetTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTags">MultaiTargetSetTags</a>]]

---


### MultaiTargetSetTagsOutputReference <a name="MultaiTargetSetTagsOutputReference" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_target_set

multaiTargetSet.MultaiTargetSetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTags">MultaiTargetSetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MultaiTargetSetTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.multaiTargetSet.MultaiTargetSetTags">MultaiTargetSetTags</a>]

---



