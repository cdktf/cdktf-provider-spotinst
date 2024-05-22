# `healthCheck` Submodule <a name="`healthCheck` Submodule" id="@cdktf/provider-spotinst.healthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthCheck <a name="HealthCheck" id="@cdktf/provider-spotinst.healthCheck.HealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check spotinst_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import health_check

healthCheck.HealthCheck(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  proxy_address: str,
  resource_id: str,
  check: HealthCheckCheck = None,
  id: str = None,
  name: str = None,
  proxy_port: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.proxyAddress">proxy_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#proxy_address HealthCheck#proxy_address}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#resource_id HealthCheck#resource_id}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.check">check</a></code> | <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck">HealthCheckCheck</a></code> | check block. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#id HealthCheck#id}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#name HealthCheck#name}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.proxyPort">proxy_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#proxy_port HealthCheck#proxy_port}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `proxy_address`<sup>Required</sup> <a name="proxy_address" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.proxyAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#proxy_address HealthCheck#proxy_address}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#resource_id HealthCheck#resource_id}.

---

##### `check`<sup>Optional</sup> <a name="check" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.check"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck">HealthCheckCheck</a>

check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#check HealthCheck#check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#id HealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#name HealthCheck#name}.

---

##### `proxy_port`<sup>Optional</sup> <a name="proxy_port" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.proxyPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#proxy_port HealthCheck#proxy_port}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.putCheck">put_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.resetCheck">reset_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.resetProxyPort">reset_proxy_port</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_check` <a name="put_check" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.putCheck"></a>

```python
def put_check(
  healthy: typing.Union[int, float],
  interval: typing.Union[int, float],
  port: typing.Union[int, float],
  protocol: str,
  unhealthy: typing.Union[int, float],
  endpoint: str = None,
  end_point: str = None,
  timeout: typing.Union[int, float] = None,
  time_out: typing.Union[int, float] = None
) -> None
```

###### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.putCheck.parameter.healthy"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#healthy HealthCheck#healthy}.

---

###### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.putCheck.parameter.interval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#interval HealthCheck#interval}.

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.putCheck.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#port HealthCheck#port}.

---

###### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.putCheck.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#protocol HealthCheck#protocol}.

---

###### `unhealthy`<sup>Required</sup> <a name="unhealthy" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.putCheck.parameter.unhealthy"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#unhealthy HealthCheck#unhealthy}.

---

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.putCheck.parameter.endpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#endpoint HealthCheck#endpoint}.

---

###### `end_point`<sup>Optional</sup> <a name="end_point" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.putCheck.parameter.endPoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#end_point HealthCheck#end_point}.

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.putCheck.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#timeout HealthCheck#timeout}.

---

###### `time_out`<sup>Optional</sup> <a name="time_out" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.putCheck.parameter.timeOut"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#time_out HealthCheck#time_out}.

---

##### `reset_check` <a name="reset_check" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.resetCheck"></a>

```python
def reset_check() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_proxy_port` <a name="reset_proxy_port" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.resetProxyPort"></a>

```python
def reset_proxy_port() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a HealthCheck resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import health_check

healthCheck.HealthCheck.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import health_check

healthCheck.HealthCheck.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import health_check

healthCheck.HealthCheck.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_spotinst import health_check

healthCheck.HealthCheck.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a HealthCheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HealthCheck to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.check">check</a></code> | <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference">HealthCheckCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.checkInput">check_input</a></code> | <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck">HealthCheckCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.proxyAddressInput">proxy_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.proxyPortInput">proxy_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.proxyAddress">proxy_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.proxyPort">proxy_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.check"></a>

```python
check: HealthCheckCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference">HealthCheckCheckOutputReference</a>

---

##### `check_input`<sup>Optional</sup> <a name="check_input" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.checkInput"></a>

```python
check_input: HealthCheckCheck
```

- *Type:* <a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck">HealthCheckCheck</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `proxy_address_input`<sup>Optional</sup> <a name="proxy_address_input" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.proxyAddressInput"></a>

```python
proxy_address_input: str
```

- *Type:* str

---

##### `proxy_port_input`<sup>Optional</sup> <a name="proxy_port_input" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.proxyPortInput"></a>

```python
proxy_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `proxy_address`<sup>Required</sup> <a name="proxy_address" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.proxyAddress"></a>

```python
proxy_address: str
```

- *Type:* str

---

##### `proxy_port`<sup>Required</sup> <a name="proxy_port" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.proxyPort"></a>

```python
proxy_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HealthCheckCheck <a name="HealthCheckCheck" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import health_check

healthCheck.HealthCheckCheck(
  healthy: typing.Union[int, float],
  interval: typing.Union[int, float],
  port: typing.Union[int, float],
  protocol: str,
  unhealthy: typing.Union[int, float],
  endpoint: str = None,
  end_point: str = None,
  timeout: typing.Union[int, float] = None,
  time_out: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.healthy">healthy</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#healthy HealthCheck#healthy}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#interval HealthCheck#interval}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#port HealthCheck#port}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#protocol HealthCheck#protocol}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.unhealthy">unhealthy</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#unhealthy HealthCheck#unhealthy}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#endpoint HealthCheck#endpoint}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.endPoint">end_point</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#end_point HealthCheck#end_point}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#timeout HealthCheck#timeout}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.timeOut">time_out</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#time_out HealthCheck#time_out}. |

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.healthy"></a>

```python
healthy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#healthy HealthCheck#healthy}.

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#interval HealthCheck#interval}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#port HealthCheck#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#protocol HealthCheck#protocol}.

---

##### `unhealthy`<sup>Required</sup> <a name="unhealthy" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.unhealthy"></a>

```python
unhealthy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#unhealthy HealthCheck#unhealthy}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#endpoint HealthCheck#endpoint}.

---

##### `end_point`<sup>Optional</sup> <a name="end_point" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.endPoint"></a>

```python
end_point: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#end_point HealthCheck#end_point}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#timeout HealthCheck#timeout}.

---

##### `time_out`<sup>Optional</sup> <a name="time_out" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.timeOut"></a>

```python
time_out: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#time_out HealthCheck#time_out}.

---

### HealthCheckConfig <a name="HealthCheckConfig" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import health_check

healthCheck.HealthCheckConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  proxy_address: str,
  resource_id: str,
  check: HealthCheckCheck = None,
  id: str = None,
  name: str = None,
  proxy_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.proxyAddress">proxy_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#proxy_address HealthCheck#proxy_address}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#resource_id HealthCheck#resource_id}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.check">check</a></code> | <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck">HealthCheckCheck</a></code> | check block. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#id HealthCheck#id}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#name HealthCheck#name}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.proxyPort">proxy_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#proxy_port HealthCheck#proxy_port}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `proxy_address`<sup>Required</sup> <a name="proxy_address" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.proxyAddress"></a>

```python
proxy_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#proxy_address HealthCheck#proxy_address}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#resource_id HealthCheck#resource_id}.

---

##### `check`<sup>Optional</sup> <a name="check" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.check"></a>

```python
check: HealthCheckCheck
```

- *Type:* <a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck">HealthCheckCheck</a>

check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#check HealthCheck#check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#id HealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#name HealthCheck#name}.

---

##### `proxy_port`<sup>Optional</sup> <a name="proxy_port" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.proxyPort"></a>

```python
proxy_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.173.0/docs/resources/health_check#proxy_port HealthCheck#proxy_port}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthCheckCheckOutputReference <a name="HealthCheckCheckOutputReference" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import health_check

healthCheck.HealthCheckCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.resetEndPoint">reset_end_point</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.resetTimeOut">reset_time_out</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_end_point` <a name="reset_end_point" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.resetEndPoint"></a>

```python
def reset_end_point() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_time_out` <a name="reset_time_out" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.resetTimeOut"></a>

```python
def reset_time_out() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.endPointInput">end_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.healthyInput">healthy_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.timeOutInput">time_out_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.unhealthyInput">unhealthy_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.endPoint">end_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.healthy">healthy</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.timeOut">time_out</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.unhealthy">unhealthy</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck">HealthCheckCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `end_point_input`<sup>Optional</sup> <a name="end_point_input" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.endPointInput"></a>

```python
end_point_input: str
```

- *Type:* str

---

##### `healthy_input`<sup>Optional</sup> <a name="healthy_input" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.healthyInput"></a>

```python
healthy_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_out_input`<sup>Optional</sup> <a name="time_out_input" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.timeOutInput"></a>

```python
time_out_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unhealthy_input`<sup>Optional</sup> <a name="unhealthy_input" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.unhealthyInput"></a>

```python
unhealthy_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `end_point`<sup>Required</sup> <a name="end_point" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.endPoint"></a>

```python
end_point: str
```

- *Type:* str

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.healthy"></a>

```python
healthy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_out`<sup>Required</sup> <a name="time_out" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.timeOut"></a>

```python
time_out: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unhealthy`<sup>Required</sup> <a name="unhealthy" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.unhealthy"></a>

```python
unhealthy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.internalValue"></a>

```python
internal_value: HealthCheckCheck
```

- *Type:* <a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck">HealthCheckCheck</a>

---



