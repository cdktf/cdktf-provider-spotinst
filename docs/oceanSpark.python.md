# `oceanSpark` Submodule <a name="`oceanSpark` Submodule" id="@cdktf/provider-spotinst.oceanSpark"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanSpark <a name="OceanSpark" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark spotinst_ocean_spark}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSpark(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ocean_cluster_id: str,
  compute: OceanSparkCompute = None,
  id: str = None,
  ingress: OceanSparkIngress = None,
  log_collection: OceanSparkLogCollection = None,
  spark: OceanSparkSpark = None,
  webhook: OceanSparkWebhook = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.oceanClusterId">ocean_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#ocean_cluster_id OceanSpark#ocean_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.compute">compute</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a></code> | compute block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#id OceanSpark#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a></code> | ingress block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.logCollection">log_collection</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a></code> | log_collection block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.spark">spark</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.webhook">webhook</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a></code> | webhook block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ocean_cluster_id`<sup>Required</sup> <a name="ocean_cluster_id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.oceanClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#ocean_cluster_id OceanSpark#ocean_cluster_id}.

---

##### `compute`<sup>Optional</sup> <a name="compute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.compute"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#compute OceanSpark#compute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#id OceanSpark#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.ingress"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a>

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#ingress OceanSpark#ingress}

---

##### `log_collection`<sup>Optional</sup> <a name="log_collection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.logCollection"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a>

log_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#log_collection OceanSpark#log_collection}

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.spark"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#spark OceanSpark#spark}

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.webhook"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a>

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#webhook OceanSpark#webhook}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putCompute">put_compute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putIngress">put_ingress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putLogCollection">put_log_collection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putSpark">put_spark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putWebhook">put_webhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetCompute">reset_compute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetIngress">reset_ingress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetLogCollection">reset_log_collection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetSpark">reset_spark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetWebhook">reset_webhook</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_compute` <a name="put_compute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putCompute"></a>

```python
def put_compute(
  create_vngs: typing.Union[bool, IResolvable] = None,
  use_taints: typing.Union[bool, IResolvable] = None
) -> None
```

###### `create_vngs`<sup>Optional</sup> <a name="create_vngs" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putCompute.parameter.createVngs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#create_vngs OceanSpark#create_vngs}.

---

###### `use_taints`<sup>Optional</sup> <a name="use_taints" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putCompute.parameter.useTaints"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#use_taints OceanSpark#use_taints}.

---

##### `put_ingress` <a name="put_ingress" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putIngress"></a>

```python
def put_ingress(
  controller: OceanSparkIngressController = None,
  custom_endpoint: OceanSparkIngressCustomEndpoint = None,
  load_balancer: OceanSparkIngressLoadBalancer = None,
  private_link: OceanSparkIngressPrivateLink = None,
  service_annotations: typing.Mapping[str] = None
) -> None
```

###### `controller`<sup>Optional</sup> <a name="controller" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putIngress.parameter.controller"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a>

controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#controller OceanSpark#controller}

---

###### `custom_endpoint`<sup>Optional</sup> <a name="custom_endpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putIngress.parameter.customEndpoint"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a>

custom_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#custom_endpoint OceanSpark#custom_endpoint}

---

###### `load_balancer`<sup>Optional</sup> <a name="load_balancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putIngress.parameter.loadBalancer"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#load_balancer OceanSpark#load_balancer}

---

###### `private_link`<sup>Optional</sup> <a name="private_link" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putIngress.parameter.privateLink"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a>

private_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#private_link OceanSpark#private_link}

---

###### `service_annotations`<sup>Optional</sup> <a name="service_annotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putIngress.parameter.serviceAnnotations"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}.

---

##### `put_log_collection` <a name="put_log_collection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putLogCollection"></a>

```python
def put_log_collection(
  collect_app_logs: typing.Union[bool, IResolvable] = None
) -> None
```

###### `collect_app_logs`<sup>Optional</sup> <a name="collect_app_logs" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putLogCollection.parameter.collectAppLogs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#collect_app_logs OceanSpark#collect_app_logs}.

---

##### `put_spark` <a name="put_spark" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putSpark"></a>

```python
def put_spark(
  additional_app_namespaces: typing.List[str] = None
) -> None
```

###### `additional_app_namespaces`<sup>Optional</sup> <a name="additional_app_namespaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putSpark.parameter.additionalAppNamespaces"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#additional_app_namespaces OceanSpark#additional_app_namespaces}.

---

##### `put_webhook` <a name="put_webhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putWebhook"></a>

```python
def put_webhook(
  host_network_ports: typing.List[typing.Union[int, float]] = None,
  use_host_network: typing.Union[bool, IResolvable] = None
) -> None
```

###### `host_network_ports`<sup>Optional</sup> <a name="host_network_ports" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putWebhook.parameter.hostNetworkPorts"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#host_network_ports OceanSpark#host_network_ports}.

---

###### `use_host_network`<sup>Optional</sup> <a name="use_host_network" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putWebhook.parameter.useHostNetwork"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#use_host_network OceanSpark#use_host_network}.

---

##### `reset_compute` <a name="reset_compute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetCompute"></a>

```python
def reset_compute() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ingress` <a name="reset_ingress" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetIngress"></a>

```python
def reset_ingress() -> None
```

##### `reset_log_collection` <a name="reset_log_collection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetLogCollection"></a>

```python
def reset_log_collection() -> None
```

##### `reset_spark` <a name="reset_spark" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetSpark"></a>

```python
def reset_spark() -> None
```

##### `reset_webhook` <a name="reset_webhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetWebhook"></a>

```python
def reset_webhook() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OceanSpark resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSpark.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSpark.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSpark.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSpark.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OceanSpark resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OceanSpark to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OceanSpark that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OceanSpark to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.compute">compute</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference">OceanSparkComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference">OceanSparkIngressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.logCollection">log_collection</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference">OceanSparkLogCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference">OceanSparkSparkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.webhook">webhook</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference">OceanSparkWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.computeInput">compute_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.ingressInput">ingress_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.logCollectionInput">log_collection_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.oceanClusterIdInput">ocean_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.sparkInput">spark_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.webhookInput">webhook_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.oceanClusterId">ocean_cluster_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.compute"></a>

```python
compute: OceanSparkComputeOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference">OceanSparkComputeOutputReference</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.ingress"></a>

```python
ingress: OceanSparkIngressOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference">OceanSparkIngressOutputReference</a>

---

##### `log_collection`<sup>Required</sup> <a name="log_collection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.logCollection"></a>

```python
log_collection: OceanSparkLogCollectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference">OceanSparkLogCollectionOutputReference</a>

---

##### `spark`<sup>Required</sup> <a name="spark" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.spark"></a>

```python
spark: OceanSparkSparkOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference">OceanSparkSparkOutputReference</a>

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.webhook"></a>

```python
webhook: OceanSparkWebhookOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference">OceanSparkWebhookOutputReference</a>

---

##### `compute_input`<sup>Optional</sup> <a name="compute_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.computeInput"></a>

```python
compute_input: OceanSparkCompute
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingress_input`<sup>Optional</sup> <a name="ingress_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.ingressInput"></a>

```python
ingress_input: OceanSparkIngress
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a>

---

##### `log_collection_input`<sup>Optional</sup> <a name="log_collection_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.logCollectionInput"></a>

```python
log_collection_input: OceanSparkLogCollection
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a>

---

##### `ocean_cluster_id_input`<sup>Optional</sup> <a name="ocean_cluster_id_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.oceanClusterIdInput"></a>

```python
ocean_cluster_id_input: str
```

- *Type:* str

---

##### `spark_input`<sup>Optional</sup> <a name="spark_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.sparkInput"></a>

```python
spark_input: OceanSparkSpark
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a>

---

##### `webhook_input`<sup>Optional</sup> <a name="webhook_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.webhookInput"></a>

```python
webhook_input: OceanSparkWebhook
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ocean_cluster_id`<sup>Required</sup> <a name="ocean_cluster_id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.oceanClusterId"></a>

```python
ocean_cluster_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OceanSparkCompute <a name="OceanSparkCompute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSparkCompute(
  create_vngs: typing.Union[bool, IResolvable] = None,
  use_taints: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.property.createVngs">create_vngs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#create_vngs OceanSpark#create_vngs}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.property.useTaints">use_taints</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#use_taints OceanSpark#use_taints}. |

---

##### `create_vngs`<sup>Optional</sup> <a name="create_vngs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.property.createVngs"></a>

```python
create_vngs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#create_vngs OceanSpark#create_vngs}.

---

##### `use_taints`<sup>Optional</sup> <a name="use_taints" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.property.useTaints"></a>

```python
use_taints: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#use_taints OceanSpark#use_taints}.

---

### OceanSparkConfig <a name="OceanSparkConfig" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSparkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ocean_cluster_id: str,
  compute: OceanSparkCompute = None,
  id: str = None,
  ingress: OceanSparkIngress = None,
  log_collection: OceanSparkLogCollection = None,
  spark: OceanSparkSpark = None,
  webhook: OceanSparkWebhook = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.oceanClusterId">ocean_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#ocean_cluster_id OceanSpark#ocean_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.compute">compute</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a></code> | compute block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#id OceanSpark#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a></code> | ingress block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.logCollection">log_collection</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a></code> | log_collection block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.webhook">webhook</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a></code> | webhook block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ocean_cluster_id`<sup>Required</sup> <a name="ocean_cluster_id" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.oceanClusterId"></a>

```python
ocean_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#ocean_cluster_id OceanSpark#ocean_cluster_id}.

---

##### `compute`<sup>Optional</sup> <a name="compute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.compute"></a>

```python
compute: OceanSparkCompute
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#compute OceanSpark#compute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#id OceanSpark#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.ingress"></a>

```python
ingress: OceanSparkIngress
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a>

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#ingress OceanSpark#ingress}

---

##### `log_collection`<sup>Optional</sup> <a name="log_collection" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.logCollection"></a>

```python
log_collection: OceanSparkLogCollection
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a>

log_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#log_collection OceanSpark#log_collection}

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.spark"></a>

```python
spark: OceanSparkSpark
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#spark OceanSpark#spark}

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.webhook"></a>

```python
webhook: OceanSparkWebhook
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a>

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#webhook OceanSpark#webhook}

---

### OceanSparkIngress <a name="OceanSparkIngress" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSparkIngress(
  controller: OceanSparkIngressController = None,
  custom_endpoint: OceanSparkIngressCustomEndpoint = None,
  load_balancer: OceanSparkIngressLoadBalancer = None,
  private_link: OceanSparkIngressPrivateLink = None,
  service_annotations: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.controller">controller</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a></code> | controller block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.customEndpoint">custom_endpoint</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a></code> | custom_endpoint block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.loadBalancer">load_balancer</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.privateLink">private_link</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a></code> | private_link block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.serviceAnnotations">service_annotations</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}. |

---

##### `controller`<sup>Optional</sup> <a name="controller" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.controller"></a>

```python
controller: OceanSparkIngressController
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a>

controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#controller OceanSpark#controller}

---

##### `custom_endpoint`<sup>Optional</sup> <a name="custom_endpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.customEndpoint"></a>

```python
custom_endpoint: OceanSparkIngressCustomEndpoint
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a>

custom_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#custom_endpoint OceanSpark#custom_endpoint}

---

##### `load_balancer`<sup>Optional</sup> <a name="load_balancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.loadBalancer"></a>

```python
load_balancer: OceanSparkIngressLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#load_balancer OceanSpark#load_balancer}

---

##### `private_link`<sup>Optional</sup> <a name="private_link" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.privateLink"></a>

```python
private_link: OceanSparkIngressPrivateLink
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a>

private_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#private_link OceanSpark#private_link}

---

##### `service_annotations`<sup>Optional</sup> <a name="service_annotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.serviceAnnotations"></a>

```python
service_annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}.

---

### OceanSparkIngressController <a name="OceanSparkIngressController" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSparkIngressController(
  managed: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController.property.managed">managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#managed OceanSpark#managed}. |

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController.property.managed"></a>

```python
managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#managed OceanSpark#managed}.

---

### OceanSparkIngressCustomEndpoint <a name="OceanSparkIngressCustomEndpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSparkIngressCustomEndpoint(
  address: str = None,
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.property.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#address OceanSpark#address}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#enabled OceanSpark#enabled}. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.property.address"></a>

```python
address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#address OceanSpark#address}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#enabled OceanSpark#enabled}.

---

### OceanSparkIngressLoadBalancer <a name="OceanSparkIngressLoadBalancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSparkIngressLoadBalancer(
  managed: typing.Union[bool, IResolvable] = None,
  service_annotations: typing.Mapping[str] = None,
  target_group_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.managed">managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#managed OceanSpark#managed}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.serviceAnnotations">service_annotations</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#target_group_arn OceanSpark#target_group_arn}. |

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.managed"></a>

```python
managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#managed OceanSpark#managed}.

---

##### `service_annotations`<sup>Optional</sup> <a name="service_annotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.serviceAnnotations"></a>

```python
service_annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}.

---

##### `target_group_arn`<sup>Optional</sup> <a name="target_group_arn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#target_group_arn OceanSpark#target_group_arn}.

---

### OceanSparkIngressPrivateLink <a name="OceanSparkIngressPrivateLink" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSparkIngressPrivateLink(
  enabled: typing.Union[bool, IResolvable] = None,
  vpc_endpoint_service: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#enabled OceanSpark#enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.property.vpcEndpointService">vpc_endpoint_service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#vpc_endpoint_service OceanSpark#vpc_endpoint_service}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#enabled OceanSpark#enabled}.

---

##### `vpc_endpoint_service`<sup>Optional</sup> <a name="vpc_endpoint_service" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.property.vpcEndpointService"></a>

```python
vpc_endpoint_service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#vpc_endpoint_service OceanSpark#vpc_endpoint_service}.

---

### OceanSparkLogCollection <a name="OceanSparkLogCollection" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSparkLogCollection(
  collect_app_logs: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection.property.collectAppLogs">collect_app_logs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#collect_app_logs OceanSpark#collect_app_logs}. |

---

##### `collect_app_logs`<sup>Optional</sup> <a name="collect_app_logs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection.property.collectAppLogs"></a>

```python
collect_app_logs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#collect_app_logs OceanSpark#collect_app_logs}.

---

### OceanSparkSpark <a name="OceanSparkSpark" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSparkSpark(
  additional_app_namespaces: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark.property.additionalAppNamespaces">additional_app_namespaces</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#additional_app_namespaces OceanSpark#additional_app_namespaces}. |

---

##### `additional_app_namespaces`<sup>Optional</sup> <a name="additional_app_namespaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark.property.additionalAppNamespaces"></a>

```python
additional_app_namespaces: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#additional_app_namespaces OceanSpark#additional_app_namespaces}.

---

### OceanSparkWebhook <a name="OceanSparkWebhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSparkWebhook(
  host_network_ports: typing.List[typing.Union[int, float]] = None,
  use_host_network: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.property.hostNetworkPorts">host_network_ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#host_network_ports OceanSpark#host_network_ports}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.property.useHostNetwork">use_host_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#use_host_network OceanSpark#use_host_network}. |

---

##### `host_network_ports`<sup>Optional</sup> <a name="host_network_ports" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.property.hostNetworkPorts"></a>

```python
host_network_ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#host_network_ports OceanSpark#host_network_ports}.

---

##### `use_host_network`<sup>Optional</sup> <a name="use_host_network" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.property.useHostNetwork"></a>

```python
use_host_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#use_host_network OceanSpark#use_host_network}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanSparkComputeOutputReference <a name="OceanSparkComputeOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSparkComputeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resetCreateVngs">reset_create_vngs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resetUseTaints">reset_use_taints</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create_vngs` <a name="reset_create_vngs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resetCreateVngs"></a>

```python
def reset_create_vngs() -> None
```

##### `reset_use_taints` <a name="reset_use_taints" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resetUseTaints"></a>

```python
def reset_use_taints() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.createVngsInput">create_vngs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.useTaintsInput">use_taints_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.createVngs">create_vngs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.useTaints">use_taints</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_vngs_input`<sup>Optional</sup> <a name="create_vngs_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.createVngsInput"></a>

```python
create_vngs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_taints_input`<sup>Optional</sup> <a name="use_taints_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.useTaintsInput"></a>

```python
use_taints_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_vngs`<sup>Required</sup> <a name="create_vngs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.createVngs"></a>

```python
create_vngs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_taints`<sup>Required</sup> <a name="use_taints" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.useTaints"></a>

```python
use_taints: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.internalValue"></a>

```python
internal_value: OceanSparkCompute
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a>

---


### OceanSparkIngressControllerOutputReference <a name="OceanSparkIngressControllerOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSparkIngressControllerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resetManaged">reset_managed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_managed` <a name="reset_managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resetManaged"></a>

```python
def reset_managed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.managedInput">managed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.managed">managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_input`<sup>Optional</sup> <a name="managed_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.managedInput"></a>

```python
managed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.managed"></a>

```python
managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.internalValue"></a>

```python
internal_value: OceanSparkIngressController
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a>

---


### OceanSparkIngressCustomEndpointOutputReference <a name="OceanSparkIngressCustomEndpointOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSparkIngressCustomEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address` <a name="reset_address" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.internalValue"></a>

```python
internal_value: OceanSparkIngressCustomEndpoint
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a>

---


### OceanSparkIngressLoadBalancerOutputReference <a name="OceanSparkIngressLoadBalancerOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSparkIngressLoadBalancerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetManaged">reset_managed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetServiceAnnotations">reset_service_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetTargetGroupArn">reset_target_group_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_managed` <a name="reset_managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetManaged"></a>

```python
def reset_managed() -> None
```

##### `reset_service_annotations` <a name="reset_service_annotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetServiceAnnotations"></a>

```python
def reset_service_annotations() -> None
```

##### `reset_target_group_arn` <a name="reset_target_group_arn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetTargetGroupArn"></a>

```python
def reset_target_group_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.managedInput">managed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.serviceAnnotationsInput">service_annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.targetGroupArnInput">target_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.managed">managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.serviceAnnotations">service_annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_input`<sup>Optional</sup> <a name="managed_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.managedInput"></a>

```python
managed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `service_annotations_input`<sup>Optional</sup> <a name="service_annotations_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.serviceAnnotationsInput"></a>

```python
service_annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_group_arn_input`<sup>Optional</sup> <a name="target_group_arn_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.targetGroupArnInput"></a>

```python
target_group_arn_input: str
```

- *Type:* str

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.managed"></a>

```python
managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `service_annotations`<sup>Required</sup> <a name="service_annotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.serviceAnnotations"></a>

```python
service_annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_group_arn`<sup>Required</sup> <a name="target_group_arn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.internalValue"></a>

```python
internal_value: OceanSparkIngressLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a>

---


### OceanSparkIngressOutputReference <a name="OceanSparkIngressOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSparkIngressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putController">put_controller</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putCustomEndpoint">put_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putLoadBalancer">put_load_balancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putPrivateLink">put_private_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetController">reset_controller</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetCustomEndpoint">reset_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetLoadBalancer">reset_load_balancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetPrivateLink">reset_private_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetServiceAnnotations">reset_service_annotations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_controller` <a name="put_controller" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putController"></a>

```python
def put_controller(
  managed: typing.Union[bool, IResolvable] = None
) -> None
```

###### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putController.parameter.managed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#managed OceanSpark#managed}.

---

##### `put_custom_endpoint` <a name="put_custom_endpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putCustomEndpoint"></a>

```python
def put_custom_endpoint(
  address: str = None,
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putCustomEndpoint.parameter.address"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#address OceanSpark#address}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putCustomEndpoint.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#enabled OceanSpark#enabled}.

---

##### `put_load_balancer` <a name="put_load_balancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putLoadBalancer"></a>

```python
def put_load_balancer(
  managed: typing.Union[bool, IResolvable] = None,
  service_annotations: typing.Mapping[str] = None,
  target_group_arn: str = None
) -> None
```

###### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putLoadBalancer.parameter.managed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#managed OceanSpark#managed}.

---

###### `service_annotations`<sup>Optional</sup> <a name="service_annotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putLoadBalancer.parameter.serviceAnnotations"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}.

---

###### `target_group_arn`<sup>Optional</sup> <a name="target_group_arn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putLoadBalancer.parameter.targetGroupArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#target_group_arn OceanSpark#target_group_arn}.

---

##### `put_private_link` <a name="put_private_link" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putPrivateLink"></a>

```python
def put_private_link(
  enabled: typing.Union[bool, IResolvable] = None,
  vpc_endpoint_service: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putPrivateLink.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#enabled OceanSpark#enabled}.

---

###### `vpc_endpoint_service`<sup>Optional</sup> <a name="vpc_endpoint_service" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putPrivateLink.parameter.vpcEndpointService"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.165.0/docs/resources/ocean_spark#vpc_endpoint_service OceanSpark#vpc_endpoint_service}.

---

##### `reset_controller` <a name="reset_controller" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetController"></a>

```python
def reset_controller() -> None
```

##### `reset_custom_endpoint` <a name="reset_custom_endpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetCustomEndpoint"></a>

```python
def reset_custom_endpoint() -> None
```

##### `reset_load_balancer` <a name="reset_load_balancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetLoadBalancer"></a>

```python
def reset_load_balancer() -> None
```

##### `reset_private_link` <a name="reset_private_link" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetPrivateLink"></a>

```python
def reset_private_link() -> None
```

##### `reset_service_annotations` <a name="reset_service_annotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetServiceAnnotations"></a>

```python
def reset_service_annotations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.controller">controller</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference">OceanSparkIngressControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.customEndpoint">custom_endpoint</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference">OceanSparkIngressCustomEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.loadBalancer">load_balancer</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference">OceanSparkIngressLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.privateLink">private_link</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference">OceanSparkIngressPrivateLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.controllerInput">controller_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.customEndpointInput">custom_endpoint_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.loadBalancerInput">load_balancer_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.privateLinkInput">private_link_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.serviceAnnotationsInput">service_annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.serviceAnnotations">service_annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `controller`<sup>Required</sup> <a name="controller" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.controller"></a>

```python
controller: OceanSparkIngressControllerOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference">OceanSparkIngressControllerOutputReference</a>

---

##### `custom_endpoint`<sup>Required</sup> <a name="custom_endpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.customEndpoint"></a>

```python
custom_endpoint: OceanSparkIngressCustomEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference">OceanSparkIngressCustomEndpointOutputReference</a>

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.loadBalancer"></a>

```python
load_balancer: OceanSparkIngressLoadBalancerOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference">OceanSparkIngressLoadBalancerOutputReference</a>

---

##### `private_link`<sup>Required</sup> <a name="private_link" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.privateLink"></a>

```python
private_link: OceanSparkIngressPrivateLinkOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference">OceanSparkIngressPrivateLinkOutputReference</a>

---

##### `controller_input`<sup>Optional</sup> <a name="controller_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.controllerInput"></a>

```python
controller_input: OceanSparkIngressController
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a>

---

##### `custom_endpoint_input`<sup>Optional</sup> <a name="custom_endpoint_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.customEndpointInput"></a>

```python
custom_endpoint_input: OceanSparkIngressCustomEndpoint
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a>

---

##### `load_balancer_input`<sup>Optional</sup> <a name="load_balancer_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.loadBalancerInput"></a>

```python
load_balancer_input: OceanSparkIngressLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a>

---

##### `private_link_input`<sup>Optional</sup> <a name="private_link_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.privateLinkInput"></a>

```python
private_link_input: OceanSparkIngressPrivateLink
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a>

---

##### `service_annotations_input`<sup>Optional</sup> <a name="service_annotations_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.serviceAnnotationsInput"></a>

```python
service_annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `service_annotations`<sup>Required</sup> <a name="service_annotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.serviceAnnotations"></a>

```python
service_annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.internalValue"></a>

```python
internal_value: OceanSparkIngress
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a>

---


### OceanSparkIngressPrivateLinkOutputReference <a name="OceanSparkIngressPrivateLinkOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSparkIngressPrivateLinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resetVpcEndpointService">reset_vpc_endpoint_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_vpc_endpoint_service` <a name="reset_vpc_endpoint_service" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resetVpcEndpointService"></a>

```python
def reset_vpc_endpoint_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.vpcEndpointServiceInput">vpc_endpoint_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.vpcEndpointService">vpc_endpoint_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vpc_endpoint_service_input`<sup>Optional</sup> <a name="vpc_endpoint_service_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.vpcEndpointServiceInput"></a>

```python
vpc_endpoint_service_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vpc_endpoint_service`<sup>Required</sup> <a name="vpc_endpoint_service" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.vpcEndpointService"></a>

```python
vpc_endpoint_service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.internalValue"></a>

```python
internal_value: OceanSparkIngressPrivateLink
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a>

---


### OceanSparkLogCollectionOutputReference <a name="OceanSparkLogCollectionOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSparkLogCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resetCollectAppLogs">reset_collect_app_logs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_collect_app_logs` <a name="reset_collect_app_logs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resetCollectAppLogs"></a>

```python
def reset_collect_app_logs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.collectAppLogsInput">collect_app_logs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.collectAppLogs">collect_app_logs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `collect_app_logs_input`<sup>Optional</sup> <a name="collect_app_logs_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.collectAppLogsInput"></a>

```python
collect_app_logs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `collect_app_logs`<sup>Required</sup> <a name="collect_app_logs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.collectAppLogs"></a>

```python
collect_app_logs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.internalValue"></a>

```python
internal_value: OceanSparkLogCollection
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a>

---


### OceanSparkSparkOutputReference <a name="OceanSparkSparkOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSparkSparkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resetAdditionalAppNamespaces">reset_additional_app_namespaces</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_app_namespaces` <a name="reset_additional_app_namespaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resetAdditionalAppNamespaces"></a>

```python
def reset_additional_app_namespaces() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.additionalAppNamespacesInput">additional_app_namespaces_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.additionalAppNamespaces">additional_app_namespaces</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_app_namespaces_input`<sup>Optional</sup> <a name="additional_app_namespaces_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.additionalAppNamespacesInput"></a>

```python
additional_app_namespaces_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `additional_app_namespaces`<sup>Required</sup> <a name="additional_app_namespaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.additionalAppNamespaces"></a>

```python
additional_app_namespaces: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.internalValue"></a>

```python
internal_value: OceanSparkSpark
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a>

---


### OceanSparkWebhookOutputReference <a name="OceanSparkWebhookOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_spark

oceanSpark.OceanSparkWebhookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resetHostNetworkPorts">reset_host_network_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resetUseHostNetwork">reset_use_host_network</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host_network_ports` <a name="reset_host_network_ports" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resetHostNetworkPorts"></a>

```python
def reset_host_network_ports() -> None
```

##### `reset_use_host_network` <a name="reset_use_host_network" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resetUseHostNetwork"></a>

```python
def reset_use_host_network() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.hostNetworkPortsInput">host_network_ports_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.useHostNetworkInput">use_host_network_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.hostNetworkPorts">host_network_ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.useHostNetwork">use_host_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_network_ports_input`<sup>Optional</sup> <a name="host_network_ports_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.hostNetworkPortsInput"></a>

```python
host_network_ports_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `use_host_network_input`<sup>Optional</sup> <a name="use_host_network_input" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.useHostNetworkInput"></a>

```python
use_host_network_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_network_ports`<sup>Required</sup> <a name="host_network_ports" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.hostNetworkPorts"></a>

```python
host_network_ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `use_host_network`<sup>Required</sup> <a name="use_host_network" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.useHostNetwork"></a>

```python
use_host_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.internalValue"></a>

```python
internal_value: OceanSparkWebhook
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a>

---



